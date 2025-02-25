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

  return (
    <div className="h-auto">
      <Navbar />
      <div style={{ height: '7vh', maxHeight:'150px', minHeight:'50px', width: '100%', visibility: 'hidden' }}></div>

      <div className='d-flex justify-content-center align-content-center' style={{width:'100vw'}}>
        <ContentTwin>
          <div className="d-flex justify-content-center align-items-center" style={{ width:'100%', minHeight: '500px', height:'100%'}}>
            <Image 
              src="/eu-bg-black.png" 
              alt="" 
              width={200} 
              height={250} 
              priority={false} 
            />
          </div>
          <div >
            <TextboxComponent title={data?.title || ''} stacks={data?.stacks || ''} paragraphs={data?.paragraphs || []} /> 
          </div>      
        </ContentTwin>
      </div>

      <div className='d-flex justify-content-center align-content-center' style={{width:'100vw'}}>
        <ContentTwin>
          <div className="d-flex justify-content-center align-items-center" style={{ width:'100%', minHeight: '500px', height:'100%'}}>
            <Image 
              src="/eu-bg-black.png" 
              alt="" 
              width={200} 
              height={250} 
              priority={false} 
            />
          </div>
          <div >
            <TextboxComponent title={data?.title || ''} stacks={data?.stacks || ''} paragraphs={data?.paragraphs || []} /> 
          </div>      
        </ContentTwin>
      </div>

  </div>

  );
}
