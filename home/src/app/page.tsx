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
    <div className="text-white" style={{ backgroundColor: 'var(--background)' }}>
      <Navbar />
      <div style={{ height: '8vh', visibility: 'hidden' }}></div> {/* Div fantasma */}
      <ContentTwin>
        <div className='d-flex justify-content-center align-items-center' style={{ width:'100%', height:'100%'}}>
          <Image
            src="/eu-bg-black.png" alt=""
            width={200} height={200}
            priority={true}
            style={{ width: '40%', height: 'auto' }}
          />
        </div>
        
        <TextboxComponent 
          title={data?.title || ''} 
          stacks={data?.stacks || ''} 
          paragraphs={data?.paragraphs || []}
        />        
      </ContentTwin>
    </div>
  );
}
