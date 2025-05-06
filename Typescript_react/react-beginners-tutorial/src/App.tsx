import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react"
import { useState } from "react";


type Record = {
  id: number;
  title: string;
  amount: number;
  isIncome: boolean;
};

function App() {
  const [records, setRecords] = useState<Record[]>([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [isIncome, setIsIncome] = useState(false);

  return (
    <div>
      <Text fontSize="2xl">家計簿アプリ</Text>
      <div>
        <Input
        placeholder="タイトルを入力"
        size="md" mb="4px"
        onChange={(e) => setTitle(e.target.value)}
        />
        <Input
        placeholder="金額を入力"
        size="md" mb="4px"
        type = "number"
        onChange={(e) => setAmount(Number(e.target.value))}
        />
        <Flex align="center" justifyContent="space-between">
          <Checkbox.Root onChange={() => setIsIncome(!isIncome)}>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>入金</Checkbox.Label>
          </Checkbox.Root>
          <Button
            onClick={() => {
            const newRecord: Record = {
            id: records.length + 1,
            title: title,
            amount: amount,
            isIncome,
          };

          setRecords([...records, newRecord]);
          }}>追加</Button>
        </Flex>
      </div>
      <div>
        {records.map((record) => (
          <div key={record.id}>
            <Flex align="center" justifyContent="space-between">
            <Text>{record.title}</Text>
            <Text>
              {record.isIncome ? "+" : "-"}
              {record.amount}
            </Text>
            </Flex>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App
