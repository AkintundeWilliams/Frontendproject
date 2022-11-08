import React from 'react'
import Header from '../Header'
import Body from '../Body'
import Footer from '../Footer'
import '../../css/Home.css';
import cx from 'classnames';

const Grid = ({ children }) => (
  <div className='grid'>
    {children}
  </div>
);

const GridRow = ({ children, columns = 4 }) => {
  const cls = cx('grid__row', {
    [`grid__row--columns-${columns}`]: columns,
  });

  return (
    <div className={cls}>
      {children}
    </div>
  );
};

const GridColumn = ({ children }) => (
  <div className='grid__column'>
    {children}
  </div>
);

Grid.Row = GridRow;
Grid.Column = GridColumn;

const Home = () => {

  return (
    <Grid className='wrapper'>
      <Grid.Row columns={1} className='head'>
        <Header/>
      </Grid.Row>
      <Grid.Row columns={1} className='bod'>
        <Body/>
      </Grid.Row>
      <Grid.Row columns={1} className='foot'>
        <Footer/>
      </Grid.Row>
    </Grid>
  )
}

export default Home