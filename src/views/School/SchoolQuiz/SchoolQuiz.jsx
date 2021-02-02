import React, { useEffect } from 'react';
import { Box, Container, makeStyles } from '@material-ui/core';
import List from 'components/List';
import Button from 'components/Home_MUI/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getSchoolQuizList} from '../SchoolSlice'
import { SchoolQuizListSelector,SchoolQuizListStatusSelector } from 'utils/selectors';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const SchoolQuiz = () => {
  const dispatch = useDispatch()
  const quizes = useSelector(SchoolQuizListSelector)
  const status = useSelector(SchoolQuizListStatusSelector)

  const classes = useStyles();
  let columnName = ['Name of Quiz', 'Subject', 'TRASH', ' EDIT'];
  let ButtonName = ['TRASH', 'EDIT QUIZ']

  useEffect(() => {
    dispatch(getSchoolQuizList())
  }, [])

  return (
    <Container maxWidth={false}>
      <Box mt={3}>
        <h3>Listado de Quizzes</h3>
        {status === 'success' ? <List customers={quizes} columnName={columnName} ButtonName={ButtonName} /> : <h1>Cargando</h1>}
      </Box>
      <Button>+ Agregar</Button>
    </Container>
  );
};

export default SchoolQuiz;