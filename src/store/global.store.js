import { create } from "zustand";
import { fetchData } from "../services/subject.services";

const GlobalStore = create(set=>({
  userData:{
    studentName: "",
    rollNumber: "",
  },

  fields: ['BIT', 'CSIT'],
  semesterData: [],
  subjectData: [],

  selectedSem:{},
  selectedSub: "",
  selectedField: "",

  setUserData: (newFields) =>(
    set((state) => ({
      userData: {
        ...state.userData,
        ...newFields
      }
    }))
  ),

  setSemesterData: (data)=> set({semesterData: data}),
  setSubjectData: (subjectData)=> set({subjectData}),

  setSelectedSem: (sem)=> set({selectedSem: sem}),
  setSelectedSub: (sub) => set({ selectedSub: sub }),
  setSelectedFields: (field) => set({selectedField: field}),

  loadFieldData: async (field="bit") => {
    const res = await fetchData(field);

    set({ selectedField: field });

    set({ semesterData: res?.data });
    set({ selectedSem: res?.data[0] });

    set({ subjectData: res?.data[0]?.subjects });
    set({ selectedSub: res?.data[0]?.subjects[0] });
  },

  loadTargetSem:(index)=>{
    const state = GlobalStore.getState();
    const target = state.semesterData.find( item=> item.index == index );

    set({selectedSem: target});
    set({subjectData: target.subjects});
    set({selectedSub: target.subjects[0]});

    return target;
  },

  loadSubject: (index)=>{
    const state = GlobalStore.getState();
    const target = state.semesterData.find( item=> item.index == index );

    set({subjectData: target.subjects});
  }

}))

const useGlobalStore = ()=> GlobalStore();

export default useGlobalStore;