import { SpecialProps } from '@/features/specials/Props';
import { DataTable } from 'mantine-datatable';
import sortBy from 'lodash.sortby';
import { Text, Box } from '@mantine/core';

type Props = {
  specials: SpecialProps[];
};

export const SpecialTable = ({specials}: Props) => {

  const sortedSpecials = sortBy(specials, 'name');

  return (
    <>
      <DataTable
        withBorder
        withColumnBorders
        striped
        idAccessor='name'
        columns={[
          {
            accessor: 'name',
            title: 'ブランド名'
          },
          {
            accessor: 'effect',
            title: '効果'
          }
        ]}
        records={sortedSpecials}
      />
      <Box sx={() => ({textAlign: 'right'})}>
        <Text size="sm" variant="link" component="a" target="_blank" href="https://gamepedia.jp/splatoon3/archives/8319">
        元データ様
        </Text>
      </Box>
    </>
  );
};
