import type { NextPage, InferGetStaticPropsType } from 'next';
import { NextLink } from '@mantine/next';
import { WeaponTable } from '@/features/weapon/components/Table';
import fsPromises from 'fs/promises';
import path from 'path';
import { WeaponProps } from '@/features/weapon/Props';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({weapons}) => {
  return (
    <>
      <p>スプラ3個人用まとめ</p>
      <h2>射程比較表</h2>
      <WeaponTable weapons={weapons}></WeaponTable>
    </>
  );
};

export const getStaticProps = async () => {
  const filePath = path.join(process.cwd(), 'src/data/weapons.json');
  const data = await fsPromises.readFile(filePath, 'utf-8');
  const weapons = {
    weapons: JSON.parse(data) as WeaponProps[]
  };

  return {
    props: weapons
  };
};

export default Home;
