import{s as t,j as s}from"./index-03b441ea.js";import{T as i}from"./Hourglass-0613d73c.js";const r=e=>e.exercises.data,o=e=>e.exercises.filter.body,a=e=>e.exercises.filter.equipment,n=e=>e.exercises.filter.muscles,c=e=>e.exercises.isLoading,l=e=>e.exercises.error,d={getExercisesData:r,getIsLoading:c,getIsError:l,getFilterBody:o,getFilterEquioment:a,getFilterMuscles:n},g=t.div`
    display: block;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;

`;t.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 250px;

`;const m=()=>s.jsx(g,{children:s.jsx(i,{height:"80",width:"80",color:"#E6533C",ariaLabel:"tail-spin-loading",radius:"1",wrapperStyle:{},wrapperClass:"",visible:!0})});export{m as L,d as e};
