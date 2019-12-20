import { useState, useEffect } from "react";
//https://itnext.io/how-to-create-react-custom-hooks-for-data-fetching-with-useeffect-74c5dc47000a <==WUAO
//https://hooks-guide.netlify.com/
//const data = useFetch("http://faro2018personas.azurewebsites.net/api/faroreapi_getpersonare?identificacion=V21119337");
//ss  const data2 = useFetchPost("https://geofaro.azurewebsites.net/api/VinoTintoPostPersona?code=YAP4o9atasiNoeX/seAll5TsVA99bCsaaVO68XsnNoHHZ4YZ3UStQQ==",{ppa:"123",ppp:"ppa"});
 //OTO EJEMPLO CON falg is loading  https://medium.com/@cwlsn/how-to-fetch-data-with-react-hooks-in-a-minute-e0f9a15a44d6
 //otro gran ejemplo https://codesandbox.io/s/nostalgic-hopper-qsl0p+ 
//https://tannerlinsley.com/blog/react-hooks-the-rebirth-of-state-management teoria
 export const useFetch = (url) => {
   //https://stackoverflow.com/questions/57701733/how-to-correctly-call-usefetch-function
   //https://stackoverflow.com/questions/58100994/correct-way-to-make-single-conditional-call-to-react-hooks-usefetch-function
   //const [{ data, isLoading, isError }, fetchData] = useFetch("");
   //if ((data!=undefined)&&(!isLoading))
   //{
       // alert("ok")
      // alert("fetchDATA"+JSON.stringify(data)+" isLoading"+isLoading+" isError"+isError) 
  //}

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Just pass the variables that changes in each new fetch requisition
  const fetchData = async (url) => {
      setIsError(false);
      setIsLoading(true);
      try {
        //const response = await axios.get(url);
      //  alert(url)
        const response = await fetch(url);
       
        const data = await response.json();
        //alert("useFetch0"+JSON.stringify(data))  
        setData(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return [{ data, isLoading, isError }, fetchData];
};
/////////////////////////////////////////////////
//const [{ data, isLoading, isError }] = useFetch('http://some_api_endpoint_path');
 export const useFetch0 = (url) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      //alert("pa")
      try {
        //const response = await axios.get(url);
        const response = await fetch(url);
       
        const data = await response.json();
       // alert("useFetch"+JSON.stringify(data))  
        setData(data);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);
  return [{ data, isLoading, isError }];
};
export  function useFetch2(URL) {
    //https://www.valentinog.com/blog/hooks/
  //https://www.taniarascia.com/crud-app-in-react-with-hooks/   ejecricio nro 1
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(URL);
    //setUrl(URL)
    //url="https://geofaro.azurewebsites.net/api/VinoTintoGetPersona?code=AOMQanEobYstPwxi3beQ4pEtVkepqQdtG9LNBwNchXLyvCPR48hX1g==&id=45031619"
    //URL="http://faro2018personas.azurewebsites.net/api/faroreapi_getpersonare?identificacion=V21119337"
    //url=""
  
    async function getData() {
      alert(URL)
      const response = await fetch(URL);
      const data = await response.json();
      alert(JSON.stringify(data))
      setData(data);
    }
    
    useEffect(() => {
      getData();
    }, []);
    //alert(JSON.stringify(data))
    return data;
  }
  export  function useFetchPost(url,message) {
    const [data, setData] = useState([]);
    url="https://geofaro.azurewebsites.net/api/VinoTintoPostPersona?code=YAP4o9atasiNoeX/seAll5TsVA99bCsaaVO68XsnNoHHZ4YZ3UStQQ=="
  
    const config = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(message)
  }
    async function getData() {
      const response = await fetch(url,config);
      const data = await response.json();
      setData(data);
    }
    
    useEffect(() => {
      getData();
    }, []);
    alert("POST"+JSON.stringify(data))
    return data;
  }