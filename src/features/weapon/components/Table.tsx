import sortBy from 'lodash/sortBy';
import { DataTable,DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Text, Box } from '@mantine/core';
import { WeaponProps } from '@/features/weapon/Props';

type Props = {
  weapons: WeaponProps[];
};
export const WeaponTable = ({weapons}: Props) => {

  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'range', direction: 'asc' });
  const [records, setRecords] = useState<WeaponProps[]>(sortBy(weapons, 'name'));

  useEffect(() => {
    const data = sortBy(weapons, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
  }, [sortStatus]);

  const cols = [
    {
      accessor: 'name',
      title: '武器名',
      render: ({name, image_url}: WeaponProps) => (
        <>
          <div style={{ display:'flex', alignItems: 'center' }}>
            <Image src={image_url} width={64} height={64} alt={name}></Image>
            <Text component="span" sx={(theme) => ({marginLeft: theme.spacing.sm}) }>{name}</Text>
          </div>
        </>
      ),
    },
    {
      accessor: 'range',
      title: '射程',
      sortable: true,
      render: ({range}: WeaponProps) => (
        <Text component="span" weight="bold" size="lg">{range * 10}</Text>
      ),
    }
  ];
  return (
    <>
      <DataTable
        columns={cols}
        idAccessor="name"
        records={records}
        striped
        withBorder
        withColumnBorders
        textSelectionDisabled
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
      />
      <Box sx={() => ({textAlign: 'right'})}>
        <Text size="sm" variant="link" component="a" target="_blank" href="https://twitter.com/Berg_Blog_Spl/status/1576051676976672769">
        元データ様
        </Text>
      </Box>
    </>
  );
};
