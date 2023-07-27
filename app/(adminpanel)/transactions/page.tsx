import { executeRequest } from '@/src/utils/request';
import { TransactionsReponse } from '@/src/dtos/Transaction';
import { TRANSACTIONS_COLUMNS } from '@/src/constants/';

import { GenericContainer } from '@/src/components/elements/Container';
import { TransactionsTable } from '@/src/components/transaction/TransactionTable';

async function getData() {
    return executeRequest<TransactionsReponse>(
        fetch('http://127.0.0.1:8080/transaction-device/moving', {
            method: 'POST',
            cache: 'no-store',
        }),
    );
}

export default async function TransactionsPage() {
    const data = await getData();

    return (
        <GenericContainer>
            <TransactionsTable
                columns={TRANSACTIONS_COLUMNS}
                rows={data.data.items}
                handleRowOnClick={null as any}
            />
        </GenericContainer>
    );
}
