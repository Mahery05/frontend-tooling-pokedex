
import React,{useState} from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import SearchContent from '../../Components/SearchContent'
import Button from '../../Components/Button';
import api from '../api/pokeapi'
type SearchData = {
    data : {
        id:number;
    name:string;
    url:string;
    }

}
type GetSearchData = {
    data:SearchData[];
}
export default function search() {
    const [result,setResult] = useState<any>();
    const [images,setImages] = useState<any>(null);
    const [text,setText] = useState<string>('');
    const [load,setLoad] = useState<boolean>(false);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value);
        
    }
    const handleClick = ()=>{
        async function loadImageApi() {
            const response = await api.get(`pokemon/${text}`);
            setImages(response.data);
             console.log(images);          
        }
        async function loadApi() {
            const response = await api.get(`pokemon-species/${text}`);
            setResult(response.data);
             console.log(result);          
        }
        loadImageApi();
        loadApi();
        setLoad(true)
    }
    return(
  
    <>
    <nav>
        <Header/>
    </nav>

   <main className = "m-10">
        <div className=" flex justify-center align-center w-full  my-20">
            <SearchContent inputValue = {text}
               changed = {handleChange}
            />

            <Button
            name =
             {
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
             }
             clickedButton = {handleClick}
        />   

        </div>
   </main>
    { result !=null  && (
         <div className="flex align-center justify-center text-center m-10">
            <div className="max-w-sm bg-gray-100 text-white rounded-xl overflow-hidden shadow-lg">
                <div className="flex justify-center align-center m-5">
                    <div className = "box border h32 w-32 p-4 border-2 bg-gray-500 rounded-full text-white">{result.pokedex_numbers[0].entry_number}</div>
                </div>
                <img className="w-full  border-b border-red-800 bg-blue-200" src={images.sprites.front_default} alt={result.name}/>
  <div className="px-6 py-4 text-gray-800">
    <div className="font-bold text-xl mb-3 capitalize">{result.name}</div>
    <p className="text-gray-700 mb-3 text-large capitalize text-justify">
        <b>Habitat:</b> {result.habitat.name}
    </p>
    <p className="text-gray-700 mb-3 text-base capitalize text-justify">
    {result.flavor_text_entries[0].flavor_text}
    </p>

    

    


  </div>

</div>

         </div>
     )}
  
    </>
)}