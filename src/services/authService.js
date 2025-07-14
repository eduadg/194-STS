import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import { auth } from "../config/firebase";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export class AuthService {
  /**
   * Login com email e senha
   * @param {string} email - Email do usuário
   * @param {string} password - Senha do usuário
   * @returns {Promise<{success: boolean, user?: any, error?: string}>}
   */
  static async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  /**
   * Registro com email e senha
   * @param {string} email - Email do usuário
   * @param {string} password - Senha do usuário
   * @param {string} displayName - Nome de exibição (opcional)
   * @param {string} userType - Tipo de usuário (padrão: 'cliente')
   * @returns {Promise<{success: boolean, user?: any, error?: string}>}
   */
  static async register(email, password, displayName = null, userType = 'cliente') {
    try {
      // Criar usuário no Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Atualizar displayName se fornecido
      if (displayName) {
        await updateProfile(userCredential.user, { displayName });
      }
      
      // Criar perfil no Firestore com userType
      const profileResult = await this.createUserProfile(userCredential.user.uid, {
        email,
        displayName,
        userType,
        createdAt: new Date(),
        lastLogin: new Date(),
        isActive: true
      });
      
      if (!profileResult.success) {
        return { success: false, error: profileResult.error };
      }
      
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  /**
   * Criar perfil do usuário no Firestore
   * @param {string} userId - ID do usuário
   * @param {Object} userData - Dados do usuário
   * @returns {Promise<{success: boolean, error?: string}>}
   */
  static async createUserProfile(userId, userData) {
    try {
      const userRef = doc(db, "users", userId);
      await setDoc(userRef, {
        email: userData.email,
        displayName: userData.displayName || null,
        userType: userData.userType || null,
        createdAt: new Date(),
        lastLogin: new Date(),
        isActive: true,
        ...userData
      });
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  /**
   * Logout do usuário
   * @returns {Promise<{success: boolean, error?: string}>}
   */
  static async logout() {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  /**
   * Observar mudanças no estado de autenticação
   * @param {Function} callback - Função chamada quando o estado muda
   * @returns {Function} Função para cancelar a observação
   */
  static onAuthStateChange(callback) {
    return onAuthStateChanged(auth, callback);
  }

  /**
   * Obter usuário atual
   * @returns {Object|null} Usuário atual ou null
   */
  static getCurrentUser() {
    return auth.currentUser;
  }
} 