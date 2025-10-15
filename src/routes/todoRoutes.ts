import { Router } from 'express';
import { listTodo, getTodo, createTodo, updateTodo, deleteTodo } from '../controllers/todoController';

const router = Router();

//Endpoints
router.get('/', listTodo);
router.post('/', createTodo);
router.get('/:id', getTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;
