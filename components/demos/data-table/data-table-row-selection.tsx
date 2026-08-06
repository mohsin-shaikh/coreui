'use client';

import * as React from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table';

import * as Avatar from '@/components/ui/avatar';
import * as Badge from '@/components/ui/badge';
import * as Checkbox from '@/components/ui/checkbox';
import * as Table from '@/components/ui/table';

type Member = {
  id: string;
  name: string;
  email: string;
  title: string;
  since: string;
  status: 'active' | 'absent';
};

const data: Member[] = [
  {
    id: '1',
    name: 'James Brown',
    email: 'james@example.com',
    title: 'Marketing Manager',
    since: 'Aug, 2021',
    status: 'active',
  },
  {
    id: '2',
    name: 'Sophia Williams',
    email: 'sophia@example.com',
    title: 'HR Assistant',
    since: 'Aug, 2021',
    status: 'active',
  },
  {
    id: '3',
    name: 'Arthur Taylor',
    email: 'arthur@example.com',
    title: 'Entrepreneur / CEO',
    since: 'May, 2022',
    status: 'absent',
  },
  {
    id: '4',
    name: 'Emma Wright',
    email: 'emma@example.com',
    title: 'Front-end Developer',
    since: 'Sep, 2022',
    status: 'active',
  },
];

const columns: ColumnDef<Member>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox.Root
        checked={
          table.getIsAllPageRowsSelected()
            ? true
            : table.getIsSomePageRowsSelected()
              ? 'indeterminate'
              : false
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox.Root
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: 'Member Name',
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Avatar.Root size="40" color="blue">
          {row.original.name
            .split(' ')
            .map((part) => part[0])
            .join('')}
        </Avatar.Root>
        <div>
          <div className="text-label-sm text-text-strong-950">
            {row.original.name}
          </div>
          <div className="text-paragraph-sm text-text-sub-600">
            {row.original.email}
          </div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => (
      <div>
        <div className="text-label-sm text-text-strong-950">
          {row.original.title}
        </div>
        <div className="text-paragraph-sm text-text-sub-600">
          Since {row.original.since}
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <Badge.Root
        variant="light"
        color={row.original.status === 'active' ? 'green' : 'gray'}
      >
        {row.original.status === 'active' ? 'Active' : 'Absent'}
      </Badge.Root>
    ),
  },
];

export default function DataTableRowSelection() {
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    state: { rowSelection },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => row.id,
  });

  return (
    <Table.Root>
      <Table.Header>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Table.Head key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </Table.Head>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body>
        {table.getRowModel().rows.map((row, index) => (
          <React.Fragment key={row.id}>
            {index > 0 ? <Table.RowDivider /> : null}
            <Table.Row data-state={row.getIsSelected() ? 'selected' : undefined}>
              {row.getVisibleCells().map((cell) => (
                <Table.Cell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          </React.Fragment>
        ))}
      </Table.Body>
    </Table.Root>
  );
}

export const code = `'use client';

import * as React from 'react';
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  type ColumnDef,
} from '@tanstack/react-table';

import * as Avatar from '@/components/ui/avatar';
import * as Badge from '@/components/ui/badge';
import * as Checkbox from '@/components/ui/checkbox';
import * as Table from '@/components/ui/table';

type Member = {
  id: string;
  name: string;
  email: string;
  title: string;
  since: string;
  status: 'active' | 'absent';
};

const data: Member[] = [
  {
    id: '1',
    name: 'James Brown',
    email: 'james@example.com',
    title: 'Marketing Manager',
    since: 'Aug, 2021',
    status: 'active',
  },
  // ...
];

const columns: ColumnDef<Member>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox.Root
        checked={
          table.getIsAllPageRowsSelected()
            ? true
            : table.getIsSomePageRowsSelected()
              ? 'indeterminate'
              : false
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox.Root
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
  },
  // ...other columns
];

export default function DataTableRowSelection() {
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    state: { rowSelection },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getRowId: (row) => row.id,
  });

  return (
    <Table.Root>
      <Table.Header>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Row key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <Table.Head key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </Table.Head>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body>
        {table.getRowModel().rows.map((row, index) => (
          <React.Fragment key={row.id}>
            {index > 0 ? <Table.RowDivider /> : null}
            <Table.Row>
              {row.getVisibleCells().map((cell) => (
                <Table.Cell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          </React.Fragment>
        ))}
      </Table.Body>
    </Table.Root>
  );
}`;
