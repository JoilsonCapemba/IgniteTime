import { HandPalm, PlayCircle } from "phosphor-react";
import { BtnStart, BtnStop, CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, TaskInput } from "./style";
import {useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useEffect, useState } from "react";
import {differenceInSeconds} from "date-fns"
import { act } from "react-dom/test-utils";

/* esse é o esquema ou forma de validar o formulario com zod */

const newCycleValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a Tarefa'),
    minutesAmount: zod.number().min(1, 'O minuto nao pode ser abaixo de 1').max(60, 'O minuto nao pode ser acima de 60')
})

interface NewCycleformData{
    task: string
    minutesAmount: number
}

interface Cycle{
    id: string,
    title: string,
    minutesAmount: number,
    startDate: Date,
    interruptedDate?: Date,
    finishedDate?: Date
}

export function Home(){
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string  | null>(null)
    const [amountSecoundsPassed, setAmountSecoundsPassed] = useState(0)
    
    
    const {register, handleSubmit, watch, reset } = useForm<NewCycleformData>({
        resolver: zodResolver(newCycleValidationSchema),
        defaultValues:{
            task: '',
            minutesAmount: 0
        }
    })
 
    function handleCreateNeuCycle(data: NewCycleformData){
        const id =  String(new Date().getTime())

        const newCycle:Cycle = {
            id ,
            title: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date()
        }

        setCycles((state)=>[...state, newCycle])
        setActiveCycleId(id)
        setAmountSecoundsPassed(0)
        reset()
    }

    const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
    
    const totalSecounds = activeCycle ? activeCycle.minutesAmount * 60 : 0
    const currentSecounds = activeCycle ? totalSecounds - amountSecoundsPassed : 0
    
     const minutesAmount = Math.floor(currentSecounds / 60)
     const secoundsAmount = currentSecounds % 60 

     /* o metodo padStart obriga uma string ter um numedo de caracteres caso nao tiver preenchera com o segundo argumento da funncao */
     const minutes = String(minutesAmount).padStart(2, '0')
     const secounds = String(secoundsAmount).padStart(2, '0')

     console.log(minutes)
     console.log(secounds)

     function handleInterruptCycle(){
        setCycles(
            cycles.map((cycle)=>{
                if(cycle.id == activeCycleId){
                    return {...cycle, interruptedDate: new Date()}
                } else {
                    return cycle
                }
            })
        )

        setActiveCycleId(null)
     }
     
     useEffect(()=>{
        let interval: number;

        if(activeCycle){
            interval = setInterval(()=>{
                const secoundsDifference = differenceInSeconds( new Date(), activeCycle.startDate)
                
                if(secoundsDifference >= totalSecounds){
                    setCycles((state)=>
                        state.map((cycle)=>{
                            if(cycle.id == activeCycleId){
                                return {...cycle, finishedDate: new Date()}
                            } else {
                                return cycle
                            }
                        })
                    )
                }else{
                    setAmountSecoundsPassed(secoundsDifference)
                }
                
            }, 1000)
        }

        return (()=>{
            clearInterval(interval)
        })

     }, [activeCycle, totalSecounds, activeCycleId])

     useEffect(()=>{
        if(activeCycle){
            document.title = `${minutes}:${secounds}`
        }
     },[minutes, secounds, activeCycle])


    
    const taskInput = watch('task')

    return(
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNeuCycle)} action="">
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

                <CountdownContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{secounds[0]}</span>
                    <span>{secounds[1]}</span>
                </CountdownContainer>

                {activeCycle ? (
                    <BtnStop type="button" onClick={handleInterruptCycle}>
                        <HandPalm/>
                        Comecar
                    </BtnStop>
                ): (
                    <BtnStart type="submit" disabled={!taskInput}>
                        <PlayCircle/>
                        Comecar
                    </BtnStart>
                )}
            
            </form>
        </HomeContainer>
    )
}