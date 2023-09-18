import { useEffect , useState } from 'react';
import { useDispatch , useSelector} from 'react-redux';
import { fetchComments, addComment, deleteComment } from '../reducers/comment';
import { fetchAverage } from '../reducers/average';


export const useMemberState = () => {
    const pseudo = useSelector((state) => state.member.pseudo);
    const userId = useSelector((state) => state.member.id);
    const role = useSelector((state) => state.member.role);
  
    return { pseudo, userId, role };
  };
