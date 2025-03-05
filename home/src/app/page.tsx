"use client"
import Navbar from '@components/navbar'; 
import ContentTwin from '@/components/contenttwin';
import TextboxComponent from '@/components/textbox-component';
import RandomImg from '@/components/randomimg'
import Portfolio from '@/components/contentone';

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

      <div id='about' className='d-flex justify-content-center align-content-center' style={{width:'100vw'}}>
        <ContentTwin>
          <RandomImg></RandomImg>
          <div >
          <TextboxComponent title={data?.title || ''} stacks={data?.stacks || ''} paragraphs={data?.paragraphs || []} /> 
          </div>      
        </ContentTwin>
      </div>

      <Portfolio></Portfolio>

  </div>

  );
}
