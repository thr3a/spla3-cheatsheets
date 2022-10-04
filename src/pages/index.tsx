import type { NextPage, InferGetStaticPropsType } from 'next';
import { WeaponTable } from '@/features/weapon/components/Table';
import { BrandTable } from '@/features/brands/components/Table';
import { SpecialTable } from '@/features/specials/components/Table';
import fsPromises from 'fs/promises';
import path from 'path';
import { WeaponProps } from '@/features/weapon/Props';
import { BrandProps } from '@/features/brands/Props';
import { Text, Title, Space } from '@mantine/core';
import { SpecialProps } from '@/features/specials/Props';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home: NextPage<Props> = ({weapons, brands, specials}) => {
  return (
    <>
      <Text>スプラ3個人用まとめ</Text>
      <Space h="sm"></Space>
      <Title order={2}>射程比較表</Title>
      <WeaponTable weapons={weapons}></WeaponTable>
      <Title order={2}>ブランド一覧</Title>
      <BrandTable brands={brands}></BrandTable>
      <Space h="sm"></Space>
      <Title order={2}>スペ性能アップの効果一覧</Title>
      <SpecialTable specials={specials}></SpecialTable>
    </>
  );
};

export const getStaticProps = async () => {
  const weaponFilePath = path.join(process.cwd(), 'src/data/weapons.json');
  const weaponJson = await fsPromises.readFile(weaponFilePath, 'utf-8');
  const brandFilePath = path.join(process.cwd(), 'src/data/brands.json');
  const brandJson = await fsPromises.readFile(brandFilePath, 'utf-8');
  const specialFilePath = path.join(process.cwd(), 'src/data/specials.json');
  const specialJson = await fsPromises.readFile(specialFilePath, 'utf-8');
  return {
    props: {
      weapons: JSON.parse(weaponJson) as WeaponProps[],
      brands: JSON.parse(brandJson) as BrandProps[],
      specials: JSON.parse(specialJson) as SpecialProps[]
    }
  };
};

export default Home;
