import React, { useState } from 'react';
import { Row, Col } from 'antd';

export const Nav = () => {
  // TODO Gérer l'état active et la navigation. Link Router etc
  return (
    <>
    <div className="o-footer">
      <Row className="u-h100">
        <Col className="u-h100 m-item-menu" span={6}> icon </Col>
        <Col className="u-h100 m-item-menu" span={6}> icon </Col>
        <Col className="u-h100 m-item-menu" span={6}> icon </Col>
        <Col className="u-h100 m-item-menu" span={6}> icon </Col>
      </Row>
    </div>
    </>
  );
};
