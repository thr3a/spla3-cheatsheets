import type { NextPage } from 'next';
import { NextLink } from '@mantine/next';
import { Button } from '@mantine/core';
import { Table } from '@/features/weapon/components/Table';

const Home: NextPage = () => {
  return (
    <>
      <p>スプラ3個人用まとめ</p>
      <h2>射程比較表</h2>
      <Table></Table>
    </>
  );
};

export default Home;
