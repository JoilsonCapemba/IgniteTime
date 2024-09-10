import { HistoryContainer, HistoryList, Status } from "./style";

export function History(){
    return(
        <HistoryContainer>
            <h1>My History</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duracao</th>
                            <th>Inicio</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 min</td>
                            <td>Ha 2 dias</td>
                            <td><Status statusColor="green">concluido</Status></td>
                        </tr>

                        <tr>
                            <td>Tarefa</td>
                            <td>20 min</td>
                            <td>Ha 2 dias</td>
                            <td><Status statusColor="yellow">Em andamento</Status></td>
                        </tr>

                        <tr>
                            <td>Tarefa</td>
                            <td>20 min</td>
                            <td>Ha 2 dias</td>
                            <td><Status statusColor="red">Interrompido</Status></td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}