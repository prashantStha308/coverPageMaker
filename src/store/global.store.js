import { create } from "zustand";
import { fetchData } from "../services/subject.services";

const GlobalStore = create(set=>({
    userData:{
        studentName: "",
        rollNumber: "",
    },
    semesterData: [],
    subjectData: [
        "C-Programing",
        "Introduction to Information Technology",
        "Digital Logic"
    ],
    selectedSem:{
      "name": "First",
        "index": 1,
        "subjects":[
            "C-Programing" ,
            "Introduction to Information Technology",
            "Digital Logic"
        ]
    },
    selectedSub:"C-Programming",

    setUserData: (newFields) =>
    set((state) => ({
      userData: {
        ...state.userData,
        ...newFields
      }
    })),

    setSemesterData: (data)=> set({semesterData: data}),
    setSubjectData: (subjectData)=> set({subjectData}),

    setSelectedSem: (sem)=> set({selectedSem: sem}),
    setSelectedSub: (sub)=> set({selectedSub: sub}),

    loadSemester: async()=>{
      const res = await fetchData();
      if( res.data && res.data.length > 0 ){
        set({semesterData: res.data});
      }else{
        set({semesterData: []});
      }
      return res;
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