import { PlayCircle } from "phosphor-react";
import { BtnStart, CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, TaskInput } from "./style";

export function Home(){
    return(
        <HomeContainer>
            <form>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput id="task" list="taskSugest" placeholder="De o nome do seu projeto"/>
                        <datalist id="taskSugest">
                            <option value="Estudar"/>
                            <option value="Ler a Biblia"/>
                            <option value="Sair com a Mulher"/>
                        </datalist>
                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput type="number" id="minutesAmount"/>
                    <span>minutos.</span>
                </FormContainer>

                <CountdownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountdownContainer>

                 <BtnStart type="submit">
                    <PlayCircle/>
                    Comecar
                </BtnStart>
            
            </form>
        </HomeContainer>
    )
}