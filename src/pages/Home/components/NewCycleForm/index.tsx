

export function NewCycleForm(){
    return(
        <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <TaskInput 
                        id="task" 
                        list="taskSugest" 
                        placeholder="De o nome do seu projeto" 
                        disabled={!!activeCycle}
                        {...register('task')}
                    />
                    <datalist id="taskSugest">
                        <option value="Estudar"/>
                        <option value="Ler a Biblia"/>
                        <option value="Sair com a Mulher"/>
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <MinutesAmountInput 
                        type="number" 
                        id="minutesAmount"
                        min={1}
                        max={60}
                        disabled={!!activeCycle}
                        {...register('minutesAmount', { valueAsNumber : true })}
                    />
                    <span>minutos.</span>
                </FormContainer>
    )
}