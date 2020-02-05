import React from 'react';
import { PageHeader } from 'antd';

export const Header = () => {
  return (
    <>
      <PageHeader
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
    </>
  );
};
