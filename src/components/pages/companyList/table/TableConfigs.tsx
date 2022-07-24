import { ColumnsType } from 'antd/lib/table';
import { TCompany } from '../../../../types';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const columns: ColumnsType<TCompany> = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Found date',
    dataIndex: 'found_date',
    defaultSortOrder: 'descend',
    // sorter: (a, b) => parseInt(a.found_date) - b.found_date,
  },
  {
    title: 'Headquarter',
    dataIndex: 'headquarter',
  },
  { title: 'TM Rating', dataIndex: 'tm_rating' },
  { title: 'Developers count', dataIndex: 'developer' },
  {
    title: '',
    dataIndex: 'id',
    render: (id: string) => (
      <Link to={`${id}`}>
        <Button type="link">
          Learn more <ArrowRightOutlined />
        </Button>
      </Link>
    ),
  },
];

export const onRow = (record: any, rowIndex: any) => {
  return {
    onClick: (event: MouseEvent) => {
      console.log({ event });
    }, // click row
  };
};
