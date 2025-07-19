import { memo } from "react";
import { Clock, MessageCircle, Heart } from "lucide-react";

const PostsTab = () => {
  console.log("[ARTIFICIALLY SLOW] Rendering 500 <SlowPost />");

  const items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowPost key={i} index={i} />);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">Recent Posts</h2>
        <p className="text-sm text-gray-500">
          {items.length} posts (artificially slow rendering)
        </p>
      </div>
      <div className="grid gap-3 max-h-96 overflow-y-auto pr-2">{items}</div>
    </div>
  );
};

const SlowPost = memo(({ index }: { index: number }) => {
  const startTime = performance.now();
  while (performance.now() - startTime < 1) {}

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-medium text-gray-900 mb-2">Post #{index + 1}</h3>
          <p className="text-gray-600 text-sm mb-3">
            This is a sample post content that demonstrates slow rendering
            performance.
          </p>
          <div className="flex items-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>2 min ago</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart className="w-3 h-3" />
              <span>{Math.floor(Math.random() * 50)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MessageCircle className="w-3 h-3" />
              <span>{Math.floor(Math.random() * 10)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

SlowPost.displayName = "SlowPost";

export default memo(PostsTab);
