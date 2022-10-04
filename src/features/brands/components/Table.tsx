import { BrandProps } from '@/features/brands/Props';
import { DataTable,DataTableSortStatus } from 'mantine-datatable';

type Props = {
  brands: BrandProps[];
};

export const BrandTable = ({brands}: Props) => {
  return (
    <>
      <DataTable
        withBorder
        withColumnBorders
        striped
        columns={[
          {
            accessor: 'name',
            title: 'ブランド名'
          },
          {
            accessor: 'favored',
            title: 'つきやすい'
          },
          {
            accessor: 'unfavored',
            title: 'つきにくい'
          }
        ]}
        records={brands}
      />
    </>
  );
};
