import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';

export const getSession = async () => {
    return await getServerSession(authOptions);
};
