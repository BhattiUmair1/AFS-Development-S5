import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updateProfile,
  User,
  UserCredential,
} from 'firebase/auth'
import { ref, Ref } from 'vue'
import useFirebase from './useFirebase'

const user: Ref<User | null> = ref(null)

export default () => {
  const { auth } = useFirebase()
  console.log(auth)
  const setUser = (u: User | null) => {
    user.value = u
  }
  //todo: register
  const register = async (name: string, email: string, password: string) => {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((u: UserCredential) => {
          console.log(u.user)
          updateProfile(u.user, {
            displayName: name,
          })
            .then(() => {
              setUser(u.user)
              resolve(user)
            })
            .catch((err) => reject(err))
        })
        .catch((err) => reject(err))
    })
  }
  //todo: login
  const login = async (email: string, password: string) => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((u: UserCredential) => {
          resolve(u)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  //todo: restore auth
  const restoreUser = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                resolve("")
            } else {
                reject()
            }
          });
      })

  }

  //todo: forgot password
  const passwordReset = async (email: string) => {
    return new Promise((resolve, reject) => {
        sendPasswordResetEmail(auth, email).then(() => {
            resolve("")
        }).catch(() => {
            reject()
        })
    })
  }
  //todo: track user
  return {
    register,
    restoreUser,
    user,
  }
}
