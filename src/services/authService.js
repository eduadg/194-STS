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
  static async register(email, password, displayName = null) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Atualizar display name no Auth
      if (displayName) {
        await updateProfile(userCredential.user, { displayName });
      }
      
      // Criar perfil no Firestore
      await this.createUserProfile(userCredential.user.uid, {
        email,
        displayName,
        createdAt: new Date(),
        lastLogin: new Date(),
        isActive: true
      });
      
      return { success: true, user: userCredential.user };
    } catch (error) {
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
        createdAt: new Date(),
        lastLogin: new Date(),
        isActive: true,
        ...userData
      });
      
      return { success: true };
    } catch (error) {
      console.error("Erro ao criar perfil:", error);
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