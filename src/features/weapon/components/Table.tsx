import sortBy from 'lodash/sortBy';
import { DataTable,DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Text } from '@mantine/core';
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
    }
  ];
  return (
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
  );
};
