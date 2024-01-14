import { useQuery } from '@tanstack/react-query';

import { fetchGroupFeedAuth, fetchTodayTopic, fetchGroupInfo } from '../apis/fetchGroupFeed';

export const QUERY_KEY_GROUPFEED = {
  getGroupFeedAuth: 'getGroupFeedAuth',
  getTodayWritingStyle: 'getTodayWritingStyle',
};

interface GroupFeedAuthQueryResult {
  isMember: boolean | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

export const useGroupFeedAuth = (groupId: string): GroupFeedAuthQueryResult => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEY_GROUPFEED.getGroupFeedAuth, groupId],
    queryFn: () => fetchGroupFeedAuth(groupId),
  });

  const isMember = data && data.data.isMember;

  return { isMember, isLoading, isError, error };
};

interface GroupInfoQueryResult {
  groupInfoData?: {
    imageUrl: string;
    moimName: string;
    ownerName: string;
    startDate: string;
    writerCount: number;
    description: string | undefined;
  };

  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

export const useGroupInfo = (groupId: string): GroupInfoQueryResult => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['groupFeed_Info_moimId', groupId],
    queryFn: () => fetchGroupInfo(groupId),
  });

  const groupInfoData = data?.data;

  return { groupInfoData, isLoading, isError, error };
};

interface WritingStyleQueryResult {
  content: boolean;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
}

export const useTodayWritingStyle = (groupId: string): WritingStyleQueryResult => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [QUERY_KEY_GROUPFEED.getTodayWritingStyle, groupId],
    queryFn: () => fetchTodayTopic(groupId),
  });

  const content = data && data.data.content;
  return { content, isLoading, isError, error };
};
