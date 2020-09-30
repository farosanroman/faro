import { useState, useEffect } from "react";
import { useRecoilState,useRecoilValue} from "recoil";
import {persona} from '../store/atomfaro';

import {useFetch} from '../hooks/usefetch';
export const usePersona= (url,message) => {
    const [ data, isLoading, isError , fetchData] = useFetch("");
 
    const [dataPost, setDataPost] = useState();
    const [PERSONA,setPERSONA] = useRecoilState(persona);
 
    const [isLoadingPersona, setIsLoadingPersona] = useState(false);
    const [isErrorPersona, setIsErrorPersona] = useState(false);
    const [dataPersona, setDataPersona] = useState(false);
    const [isLoadingPost, setIsLoadingPost] = useState(false);
    const [isErrorPost, setIsErrorPost] = useState(false);
  
   // url="https://faronosql.azurewebsites.net/api/VinotintoPostOauth?code=qnaytKAJlMzrAPNmn4SLxavP6JKqWqA2fpxNzvxbra8k4yJCTmQeIQ=="
   // message={id:"id",ppa:123,"ppb":2222}
   const getPersona=(p)=>{
       //alert("getPersona")
       setIsLoadingPersona(true)
       const url='https://openfaroapi.azurewebsites.net/api/personagetv2?idorganizacion=16&identificacion=V6505691'
      //   console.log(url)
         fetchData(url)
   }
   useEffect(() => {
    //alert(JSON.stringify(data))
    if (isLoading) {
    //  setFlagCircular(true)
        
    }
    if ((data!=undefined)&&(!isLoading))      
    {
      setIsLoadingPersona(false)
      //alert(JSON.stringify(data))
      if (data.flag==1){
        //
        /////////////////////////////
        setPERSONA(data)
        setDataPersona(data)
        setIsErrorPersona(false)
     // setOpen(true)
      }else{
       // setFlagDialog(true)
        setPERSONA({})
        setIsErrorPersona(true)
        setIsLoadingPersona(false)
      }
      //ROJO
    }
  },[data,isLoading]);
   const postPersona = async (url,message) => {
        //alert("url"+url)
        setIsErrorPost(false);
        setIsLoadingPost(true);
    try {
    const config = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
            body: JSON.stringify(message)
          }
  
         const response = await fetch(url,config);
         const data = await response.json();
         //alert("POST RESPONSE"+JSON.stringify(data))
         setDataPost(data);
          setIsErrorPost(false);
          setIsLoadingPost(false);

    } catch (error) {
        //alert("error")
            setIsErrorPost(true);
           setIsLoadingPost(false);
    }
        
};

    useEffect(() => {
      //  alert("useEffect",url)
      postPersona(url,message);
      setIsErrorPost(false);
      setIsLoadingPost(false);
     
    }, [url,message]);
    
    return  [  isLoadingPersona, isErrorPersona ,dataPersona,getPersona, postPersona];
}