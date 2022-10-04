import { BrandProps } from '@/features/brands/Props';
import { DataTable } from 'mantine-datatable';
import sortBy from 'lodash.sortby';

type Props = {
  brands: BrandProps[];
};

export const BrandTable = ({brands}: Props) => {

  const sortedBrands = sortBy(brands, 'name');

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
            accessor: 'favored',
            title: 'つきやすい'
          },
          {
            accessor: 'unfavored',
            title: 'つきにくい'
          }
        ]}
        records={sortedBrands}
      />
    </>
  );
};
