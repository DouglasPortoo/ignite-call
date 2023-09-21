import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@ignite-ui/react'
import { Container, Header } from '../style'
import {
  IntervalBox,
  IntervalContainer,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
} from './style'
import { ArrowRight } from 'phosphor-react'
import { Controller, useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { WeekDays } from '@/src/utils/get-week-days'

const timeIntervalFormSchema = z.object({})

export default function TimeIntervals() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 1, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 2, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 3, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 4, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 5, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 6, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })

  const weekDays = WeekDays()

  const intervals = watch('intervals')

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  async function handleSetTimeInterval() {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeInterval)}>
        <IntervalContainer>
          {fields.map((fild, index) => (
            <IntervalItem key={fild.id}>
              <IntervalDay>
              <Controller
                    name={`intervals.${index}.enabled`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Checkbox
                          onCheckedChange={(checked) =>
                            field.onChange(checked === true)
                          }
                          checked={field.value}
                        />
                      )
                    }}
                  />
                <Text>{weekDays[fild.weekDay]}</Text>
              </IntervalDay>
              <IntervalInputs>
                <TextInput
                  crossOrigin=""
                  size="sm"
                  type="time"
                  step={60}
                  {...register(`intervals.${index}.startTime`)}
                  disabled={intervals[index].enabled === false}
                />
                <TextInput
                  crossOrigin=""
                  size="sm"
                  type="time"
                  step={60}
                  {...register(`intervals.${index}.endTime`)}
                  disabled={intervals[index].enabled === false}
                />
              </IntervalInputs>
            </IntervalItem>
          ))}
        </IntervalContainer>

        <Button type="submit">
          Próximo passo
          <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
