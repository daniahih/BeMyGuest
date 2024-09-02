import { createContext, useState, useContext, useEffect } from 'react'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { db } from './firebase_setup/firebase'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const queryClient = useQueryClient()

  // Authentication state handling
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setUser(user ? user : null)
    })
    return () => unsubscribe()
  }, [])

  // Fetch events from Firestore
  const fetchEvents = async () => {
    const eventsCollection = collection(db, 'events')
    const eventSnapshot = await getDocs(eventsCollection)
    return eventSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
  }

  // React Query to fetch events
  const { data: Events, isLoading, error } = useQuery('events', fetchEvents)

  // Filter events by category
  const filterCategories = (categoryName) => {
    return Events
      ? Events.filter((event) => event.categoryName === categoryName)
      : []
  }

  // Adding a new event
  const addEventMutation = useMutation({
    mutationFn: async (eventData) => {
      const eventsCollection = collection(db, 'events')
      await addDoc(eventsCollection, eventData)
    },
    onSuccess: () => {
      queryClient.invalidateQueries('events')
      toast.success('Event added successfully!')
    },
    onError: (error) => {
      toast.error('Error adding event: ' + error.message)
    },
  })

  // Updating an event
  const updateEventMutation = useMutation({
    mutationFn: async ({ id, updatedValues }) => {
      const eventRef = doc(db, 'events', id)
      await updateDoc(eventRef, updatedValues)
    },
    onSuccess: () => {
      queryClient.invalidateQueries('events')
      toast.success('Event updated successfully!')
    },
    onError: (error) => {
      toast.error('Error updating event: ' + error.message)
    },
  })

  // Deleting an event
  const deleteEventMutation = useMutation({
    mutationFn: async (id) => {
      const eventRef = doc(db, 'events', id)
      await deleteDoc(eventRef)
    },
    onSuccess: () => {
      queryClient.invalidateQueries('events')
      toast.success('Event deleted successfully!')
    },
    onError: (error) => {
      toast.error('Error deleting event: ' + error.message)
    },
  })

  return (
    <AppContext.Provider
      value={{
        user,
        Events,
        filteredEvents: Events, // You can add more sophisticated filtering if needed
        isLoading,
        error,
        filterCategories,
        addEvent: addEventMutation.mutate,
        updateEvent: updateEventMutation.mutate,
        deleteEvent: deleteEventMutation.mutate,
        handleGoogleSignIn: async () => {
          const provider = new firebase.auth.GoogleAuthProvider()
          try {
            await getAuth().signInWithPopup(provider)
          } catch (error) {
            toast.error('Error signing in with Google: ' + error.message)
          }
        },
        handleSignOut: async () => {
          try {
            await getAuth().signOut()
            toast.success('Signed out successfully!')
          } catch (error) {
            toast.error('Failed to sign out. Please try again.')
          }
        },
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
