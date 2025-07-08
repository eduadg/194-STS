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
  // Login com email e senha
  static async login(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: userCredential.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Registro com email e senha
  static async register(email, password, displayName = null, userType = 'cliente') {
    try {
      console.log('[AuthService] Iniciando registro:', { email, displayName, userType });
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('[AuthService] Usuário criado no Auth:', userCredential.user.uid);
      if (displayName) {
        await updateProfile(userCredential.user, { displayName });
        console.log('[AuthService] DisplayName atualizado');
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
        console.error('[AuthService] Erro ao criar perfil no Firestore:', profileResult.error);
        return { success: false, error: profileResult.error };
      }
      console.log('[AuthService] Perfil criado no Firestore');
      return { success: true, user: userCredential.user };
    } catch (error) {
      console.error('[AuthService] Erro no registro:', error);
      return { success: false, error: error.message };
    }
  }

  // Criar perfil no Firestore
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
      console.log('[AuthService] Documento criado no Firestore:', userId);
      return { success: true };
    } catch (error) {
      console.error('[AuthService] Erro ao criar perfil:', error);
      return { success: false, error: error.message };
    }
  }

  // Logout
  static async logout() {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }

  // Observar mudanças no estado de autenticação
  static onAuthStateChange(callback) {
    return onAuthStateChanged(auth, callback);
  }

  // Obter usuário atual
  static getCurrentUser() {
    return auth.currentUser;
  }
} 