import { getServerSession } from 'next-auth';

import { authOptions } from '@/app/lib/auth';
import { executeRequest } from '@/src/utils/request';
import { FetchTransactions } from '@/src/api/resources';
import { TransactionsReponse } from '@/src/dtos/Transaction';
import { TRANSACTIONS_COLUMNS } from '@/src/constants/';

import { GenericContainer } from '@/src/components/elements/Container';
import { TransactionsTable } from '@/src/components/transaction/TransactionTable';

async function getData() {
    const session = await getServerSession(authOptions);
    const user = session?.user || ({ apiJWT: null } as any);
    return executeRequest<TransactionsReponse>(FetchTransactions(user.apiJWT));
}

export default async function TransactionsPage() {
    const data = await getData();

    return (
        <GenericContainer>
            <TransactionsTable columns={TRANSACTIONS_COLUMNS} rows={data.data.items} />
        </GenericContainer>
    );
}
