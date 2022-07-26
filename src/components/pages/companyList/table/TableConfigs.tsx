import { ColumnsType } from 'antd/lib/table';
import { TCompany } from '../../../../types';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { numberCompareFunction } from '../../../../helpers/compareFunctions';

export const columns: ColumnsType<TCompany> = [
  {
    title: 'Name',
    dataIndex: 'name',
    fixed: 'left',
    render: (name: string, record) => <Link to={`${record.id}`}>{name}</Link>,
  },
  {
    title: 'Found date',
    dataIndex: 'found_date',
    defaultSortOrder: 'descend',
    sorter: numberCompareFunction,
  },
  {
    title: 'Headquarter',
    dataIndex: 'headquarter',
  },
  { title: 'TM Rating', dataIndex: 'tm_rating', sorter: numberCompareFunction },
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
