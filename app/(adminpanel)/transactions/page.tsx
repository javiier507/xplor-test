import { executeRequest } from '../../../src/utils/request';
import { TransactionsReponse } from '../../../src/dtos/Transaction';

import { TransactionsContainer } from '../../../src/container/TransactionsContainer';

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

    return <TransactionsContainer transactions={data.data.items} />;
}
