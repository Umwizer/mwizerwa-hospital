import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import DoctorPhoto from "../../../assets/images/doctor.png";

export default function DoctorProfile() {
  return (
    <View className="flex-1 bg-white">
      <View className="h-72 bg-teal-100">
        <Image source={DoctorPhoto} className="w-full h-full" resizeMode="cover" />
        <View className="absolute top-14 left-5 right-5 flex-row justify-between">
          <Pressable className="w-10 h-10 rounded-full bg-white/80 items-center justify-center">
            <Ionicons name="chevron-back" size={20} color="#111827" />
          </Pressable>
          <View className="flex-row gap-3">
            <Pressable className="w-10 h-10 rounded-full bg-white/80 items-center justify-center">
              <Ionicons name="call-outline" size={18} color="#111827" />
            </Pressable>
            <Pressable className="w-10 h-10 rounded-full bg-white/80 items-center justify-center">
              <Ionicons name="chatbubble-outline" size={18} color="#111827" />
            </Pressable>
          </View>
        </View>
      </View>
      <View className="px-5 pt-5">
        <View className="flex-row items-center mb-2">
          <Ionicons name="star" size={14} color="#F59E0B" />
          <Text className="text-gray-700 ml-1 font-semibold">4.9</Text>
        </View>
        <Text className="text-3xl font-bold text-gray-900">Dr. David Anderson</Text>
        <Text className="text-gray-500 mt-1 mb-3">Dentist Specialist</Text>
        <Text className="text-2xl font-bold text-teal-600">
          $90<Text className="text-base text-gray-400 font-normal"> /Per Session</Text>
        </Text>
      </View>
      <View className="px-5 mt-6">
        <Text className="text-lg font-semibold text-gray-900 mb-4">Patient Status</Text>
        <View className="flex-row justify-between items-center">
          <View className="items-center">
            <Text className="text-gray-400 text-xs mb-2">Patient</Text>
            <View className="w-16 h-16 rounded-full bg-gray-900 items-center justify-center">
              <Text className="text-white font-bold">200</Text>
            </View>
            <Text className="text-gray-400 text-xs mt-1">Recovered</Text>
          </View>

          <View className="items-center">
            <Text className="text-gray-400 text-xs mb-2">Active</Text>
            <View className="w-16 h-16 rounded-full bg-white border-2 border-teal-500 items-center justify-center">
              <Text className="text-gray-900 font-bold">12</Text>
            </View>
          </View>

          <View className="items-center">
            <Text className="text-gray-400 text-xs mb-2">Free</Text>
            <View className="w-16 h-16 rounded-full bg-gray-100 items-center justify-center">
              <Text className="text-gray-900 font-bold">10</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="px-5 mt-8">
        <Text className="text-lg font-semibold text-gray-900 mb-4">Schedule</Text>

        <View className="flex-row justify-between mb-3">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <Text key={day} className="text-gray-400 text-xs w-9 text-center">
              {day}
            </Text>
          ))}
        </View>

        <View className="flex-row justify-between mb-3">
          {[12, 13, 14, 15, 16, 17, 18].map((date) => {
            const hasAvatar = [14, 15].includes(date);
            return (
              <View key={date} className="w-9 h-9 rounded-full items-center justify-center bg-gray-100">
                {hasAvatar ? (
                  <Image source={DoctorPhoto} className="w-9 h-9 rounded-full" />
                ) : (
                  <Text className="text-gray-700 text-sm">{date}</Text>
                )}
              </View>
            );
          })}
        </View>

        <View className="flex-row justify-between">
          {[19, 20, 21, 22, 23, 24, 25].map((date) => {
            const hasAvatar = [21, 24].includes(date);
            return (
              <View key={date} className="w-9 h-9 rounded-full items-center justify-center bg-gray-100">
                {hasAvatar ? (
                  <Image source={DoctorPhoto} className="w-9 h-9 rounded-full" />
                ) : (
                  <Text className="text-gray-700 text-sm">{date}</Text>
                )}
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}