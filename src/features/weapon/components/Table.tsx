import sortBy from 'lodash/sortBy';
import { DataTable,DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import weapons from '../weapons.json';
import Image from 'next/image';
import { Text, Center } from '@mantine/core';

export const Table = () => {

  const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'range', direction: 'asc' });
  const [records, setRecords] = useState(sortBy(weapons, 'name'));

  useEffect(() => {
    const data = sortBy(weapons, sortStatus.columnAccessor);
    setRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
  }, [sortStatus]);

  const cols = [
    {
      accessor: 'name',
      title: '武器名',
      render: ({ image_url, name }) => (
        <>
          <div style={{ display:'flex', alignItems: 'center' }}>
            <Image src={image_url} width={64} height={64}></Image>
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
