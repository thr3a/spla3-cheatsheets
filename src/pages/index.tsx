import type { NextPage, InferGetStaticPropsType } from 'next';
import { WeaponTable } from '@/features/weapon/components/Table';
import { BrandTable } from '@/features/brands/components/Table';
import fsPromises from 'fs/promises';
import path from 'path';
import { WeaponProps } from '@/features/weapon/Props';
import { BrandProps } from '@/features/brands/Props';
import { Text, Title, Space } from '@mantine/core';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({weapons, brands}) => {
  return (
    <>
      <Text>スプラ3個人用まとめ</Text>
      <Space h="sm"></Space>
      <Title order={2}>射程比較表</Title>
      <WeaponTable weapons={weapons}></WeaponTable>
      <Title order={2}>ブランド表</Title>
      <BrandTable brands={brands}></BrandTable>
    </>
  );
};

export const getStaticProps = async () => {
  const weaponFilePath = path.join(process.cwd(), 'src/data/weapons.json');
  const weaponJson = await fsPromises.readFile(weaponFilePath, 'utf-8');
  const brandFilePath = path.join(process.cwd(), 'src/data/brands.json');
  const brandJson = await fsPromises.readFile(brandFilePath, 'utf-8');
  return {
    props: {
      weapons: JSON.parse(weaponJson) as WeaponProps[],
      brands: JSON.parse(brandJson) as BrandProps[]
    }
  };
};

export default Home;
