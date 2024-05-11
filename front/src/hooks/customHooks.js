
import { useSelector } from 'react-redux';



export const useMemberState = () => {

  const memberState = useSelector(state => state.member) || {}; 
  
  const { pseudo = '', userId = '', role = '' } = memberState.user || {};
  
    return { pseudo, userId, role };
  };
