import { useState, useEffect } from "react";

export function useWeekProgress(weekId, weekData) {
  const [completedItems, setCompletedItems] = useState(() => {
    const saved = localStorage.getItem(`progress_${weekId}`);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    if (weekId) {
      localStorage.setItem(`progress_${weekId}`, JSON.stringify(completedItems));
    }
  }, [completedItems, weekId]);

  const resetProgress = () => setCompletedItems({});

  const markComplete = (itemKey) => {
    setCompletedItems((prev) => ({ ...prev, [itemKey]: true }));
  };

  const allChecklistItems = weekData?.days?.flatMap((day) =>
    day.sections.flatMap((sec) =>
      sec.items.map((item) => ({ ...item, dayNum: day.dayNum })),
    ),
  ) || [];

  const totalItemsCount = allChecklistItems.length;
  const completedItemsCount = allChecklistItems.filter(
    (item) => completedItems[`${item.dayNum}_${item.label}`],
  ).length;

  const progressPercentage =
    totalItemsCount > 0
      ? Math.round((completedItemsCount / totalItemsCount) * 100)
      : 0;

  return {
    completedItems,
    progressPercentage,
    markComplete,
    resetProgress,
  };
}
