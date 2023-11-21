import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { useContext } from "react";
import { ThreadsContext } from "../../context/thread-context";
import ThreadsItem from "../../components/ThreadsItem";

export default function TabOneScreen() {

const threads = useContext(ThreadsContext) 

  return (
    <SafeAreaView style={{ marginTop: 40 }}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 30,
        }}
        refreshControl={
          <RefreshControl
            onRefresh={() => {}}
            refreshing={false}
            tintColor={"transparent"}
          />
        }
      >
        <Image
          source={require("../../assets/images/Threads_(app).png")}
          style={{ width: 40, height: 40, alignSelf: "center" }}
        />
        {threads.map((thread) => (
        <ThreadsItem key={thread.id} {...thread}/>))}
      </ScrollView>
    </SafeAreaView>
  );
}
