"use client"
import Image from 'next/image';
import Navbar from '@components/navbar'; 
import ContentTwin from '@/components/contenttwin';
import TextboxComponent from '@/components/textbox-component';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { TextboxInterface } from '@/interfaces/textbox-interface';
import { ClassData } from '@/lib/classdata';

export default function Home() {
  const [data, setData] = useState<TextboxInterface | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const dataInstance = new ClassData();
      const result = await dataInstance.GetTextBox('about-me');
      
      if (result) {
        console.log('Converted Data:', result);
        setData(result);
      } else {
        console.log('No data found for about-me.');
      }
    };
    fetchData();
  }, []);

  window.addEventListener('resize', ()=>{
    const contentTwins = document.querySelectorAll('.content-twin')
      contentTwins.forEach( c => {
        if (window.innerWidth > 900){
          c.classList.remove('column')
          c.classList.add('row')
        }else{
          c.classList.remove('row')
          c.classList.add('column')
      }
      })    
  })

  return (
    <div className="text-white h-auto">
      <Navbar />
      <ContentTwin>
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
          <Image 
            src="/eu-bg-black.png" 
            alt="" 
            width={200} 
            height={250} 
            priority={false} 
          />
        {/* <div className="align-items-center border border-white w-100" style={{ minWidth: '500px', maxWidth:'70%' }}></div> */}
        </div>
        <div >
        <TextboxComponent title={data?.title || ''} stacks={data?.stacks || ''} paragraphs={data?.paragraphs || []} /> 
       </div>      
      </ContentTwin>
  </div>

  );
}
