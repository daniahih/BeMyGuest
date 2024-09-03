import {
  SET_USER,
  FETCH_EVENTS_SUCCESS,
  FETCH_EVENTS_ERROR,
  ADD_EVENT_SUCCESS,
  UPDATE_EVENT_SUCCESS,
  DELETE_EVENT_SUCCESS,
} from "./actionTypes";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "./firebase_setup/firebase";
import { toast } from "react-toastify";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const fetchEvents = () => async (dispatch) => {
  try {
    const eventsCollection = collection(db, "BeMyGuest-RealData");
    const eventSnapshot = await getDocs(eventsCollection);

    const events = eventSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch({ type: FETCH_EVENTS_SUCCESS, payload: events });
  } catch (error) {
    dispatch({ type: FETCH_EVENTS_ERROR, payload: error.message });
    toast.error("Error fetching events: " + error.message);
  }
};

export const addEvent = (eventData) => async (dispatch) => {
  try {
    const eventsCollection = collection(db, "BeMyGuest-RealData");
    await addDoc(eventsCollection, eventData);
    dispatch({ type: ADD_EVENT_SUCCESS });
    dispatch(fetchEvents());
    toast.success("Event added successfully!");
  } catch (error) {
    toast.error("Error adding event: " + error.message);
  }
};

export const updateEvent = (id, updatedValues) => async (dispatch) => {
  try {
    const eventRef = doc(db, "BeMyGuest-RealData", id);
    await updateDoc(eventRef, updatedValues);
    dispatch({ type: UPDATE_EVENT_SUCCESS });
    dispatch(fetchEvents());
    toast.success("Event updated successfully!");
  } catch (error) {
    toast.error("Error updating event: " + error.message);
  }
};

export const deleteEvent = (id) => async (dispatch) => {
  try {
    const eventRef = doc(db, "BeMyGuest-RealData", id);
    await deleteDoc(eventRef);
    dispatch({ type: DELETE_EVENT_SUCCESS });
    dispatch(fetchEvents());
    toast.success("Event deleted successfully!");
  } catch (error) {
    toast.error("Error deleting event: " + error.message);
  }
};
