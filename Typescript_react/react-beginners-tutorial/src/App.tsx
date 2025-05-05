import { Button, Checkbox, Flex, Text } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react"


function App() {
  return (
    <div>
      <Text fontSize="2xl">家計簿アプリ</Text>
      <div>
        <Input placeholder="タイトルを入力" size="md" mb="4px"/>
        <Input placeholder="金額を入力" size="md" mb="4px" />
        <Flex align="center" justifyContent="space-between">
          <Checkbox.Root>
            <Checkbox.HiddenInput />
            <Checkbox.Control />
            <Checkbox.Label>入金</Checkbox.Label>
          </Checkbox.Root>
          <Button>追加</Button>
        </Flex>
      </div>
    </div>
  );
}

export default App
