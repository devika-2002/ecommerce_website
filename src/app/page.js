import React from 'react';
import Navbar from '@/Components/Navbar';
import Carousel from '@/Components/Carousel';
import Card from '@/Components/Card/Card';
import Card1 from '@/Components/Card1/Card1';
import Card2 from '@/Components/Card2/Card2';
import Card3 from '@/Components/Card3/Card3';

const Page = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Card/>
      <Card1/>
      <Card2/>
      <Card3/>
    </div>
  );
};

export default Page;
