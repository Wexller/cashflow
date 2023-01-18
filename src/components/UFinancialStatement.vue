<script setup lang="ts">
import { ref } from 'vue';
import { FinancialStatement } from '@/core/game/financial-statemtnt/FinancialStatement';

const props = defineProps<{
  financialStatement: FinancialStatement;
}>();

const statement = ref<FinancialStatement>(props.financialStatement);
</script>

<template>
  <div class="w-[650px] bg-amber-100 p-10">
    <div class="text-center font-bold">
      <div>Профессия</div>
      <div class="bg-black text-2xl uppercase italic text-white">
        {{ statement.professionName }}
      </div>
      <div class="italic">
        Цель: добиться того, чтобы ваш пассивный доход превысил общую сумму
        ваших расходов
      </div>
    </div>
    <div class="mt-4 flex space-x-4">
      <div class="basis-3/5">
        <div class="bg-black text-center font-bold italic text-white">
          Доходы
        </div>
        <div class="flex justify-between">
          <span>Зарплата:</span>
          <span>${{ statement.incomes.salary }}</span>
        </div>
        <div class="flex justify-between">
          <span>Проценты:</span>
          <span>0</span>
        </div>
        <div class="flex justify-between">
          <span>Дивиденды:</span>
          <span>0</span>
        </div>
        <div class="flex justify-between">
          <span>Недвижимость:</span>
          <span>0</span>
        </div>
        <div class="flex justify-between">
          <span>Предприятия:</span>
          <span>0</span>
        </div>
      </div>

      <div class="flex basis-2/5 flex-col justify-end">
        <div class="flex justify-between">
          <span>Зарплата:</span>
          <span>${{ statement.incomes.salary }}</span>
        </div>
        <div class="text-center font-bold">+</div>
        <div class="flex justify-between">
          <span>Пассивный доход:</span>
          <span>{{ statement.incomes.getPassiveIncome() }}</span>
        </div>
        <div class="text-center font-bold">=</div>
        <div class="flex justify-between font-bold">
          <span>Общий доход:</span>
          <span>${{ statement.incomes.getTotalIncome() }}</span>
        </div>
      </div>
    </div>

    <div class="mt-4 flex space-x-4">
      <div class="basis-3/5">
        <div>
          <div class="bg-black text-center font-bold italic text-white">
            Расходы
          </div>
          <div class="flex justify-between">
            <span>Налоги:</span>
            <span>{{ statement.expenses.taxes }}</span>
          </div>
          <div class="flex justify-between">
            <span>Выплаты по ипотеке и арендная плата:</span>
            <span>{{ statement.expenses.homeMortgage }}</span>
          </div>
          <div class="flex justify-between">
            <span>Выплаты по кредиту на образование:</span>
            <span>{{ statement.expenses.schoolLoan }}</span>
          </div>
          <div class="flex justify-between">
            <span>Выплаты по кредиту на машнину:</span>
            <span>{{ statement.expenses.carLoan }}</span>
          </div>
          <div class="flex justify-between">
            <span>Выплаты по кредитным карточкам:</span>
            <span>{{ statement.expenses.creditCard }}</span>
          </div>
          <div class="flex justify-between">
            <span>Выплаты по мелким кредитам:</span>
            <span>{{ statement.expenses.retail }}</span>
          </div>
          <div class="flex justify-between">
            <span>Прочие расходы:</span>
            <span>{{ statement.expenses.otherExpenses }}</span>
          </div>
          <div class="flex justify-between">
            <span>Расходы на детей:</span>
            <span>{{ statement.expenses.childrenExpenses }}</span>
          </div>
        </div>
      </div>
      <div class="flex basis-2/5 flex-col justify-between">
        <div class="text-center font-bold">-</div>
        <div class="flex justify-between font-bold">
          <span>Общий расход:</span>
          <span>${{ statement.expenses.getTotalExpenses() }}</span>
        </div>
      </div>
    </div>

    <div class="mt-4 flex space-x-4">
      <div class="basis-3/5">
        <div class="flex justify-between border-4 border-black py-4 px-2">
          <span>Расходы на одного ребенка</span>
          <span>${{ statement.expenses.perChildExpense }}</span>
        </div>
      </div>

      <div class="flex basis-2/5 flex-col justify-between">
        <div class="text-center font-bold">=</div>
        <div class="flex items-center justify-between font-bold">
          <span>Месячный денежный поток:</span>
          <span>${{ statement.getPayday() }}</span>
        </div>
      </div>
    </div>

    <div class="mt-4 flex">
      <div class="mt-4 basis-2/5">
        <div class="bg-black text-center font-bold italic text-white">
          Активы
        </div>

        <div class="mt-4 pr-4">
          <div class="flex justify-between">
            <span>Сбережения:</span>
            <span>{{ statement.assets.savings }}</span>
          </div>
        </div>
      </div>

      <div class="mt-4 basis-3/5">
        <div class="bg-black text-center font-bold italic text-white">
          Пассивы
        </div>

        <div class="mt-4 pl-4">
          <div class="flex justify-between">
            <span>Ипотека:</span>
            <span>{{ statement.liabilities.homeMortgage }}</span>
          </div>
          <div class="flex justify-between">
            <span>Кредит на образование:</span>
            <span>{{ statement.liabilities.schoolLoan }}</span>
          </div>
          <div class="flex justify-between">
            <span>Кредит на машину:</span>
            <span>{{ statement.liabilities.carLoan }}</span>
          </div>
          <div class="flex justify-between">
            <span>Кредитные карточки:</span>
            <span>{{ statement.liabilities.creditCard }}</span>
          </div>
          <div class="flex justify-between">
            <span>Мелкие кредиты:</span>
            <span>{{ statement.liabilities.retail }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
